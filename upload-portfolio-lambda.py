import boto3
import StringIO
import zipfile
import mimetypes


def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic("arn:aws:sns:eu-west-1:276935992059:deployPortfolioTopic")

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.awpitconsulting.com')
        build_bucket = s3.Bucket('portfoliobuild.awpitconsulting.com')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                mime_type = mimetypes.guess_type(nm)[0]
                portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType': str(mime_type)})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print 'Job Done!'
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed successfully!")
    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message="The Portfolio was not deployed successfully")
        raise
    return 'Hello world'
