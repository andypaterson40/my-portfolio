import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "AWS",
    'href': "https://example.com",
    'desc': "List of personal and professional work within AWS",
    'desc_1': "Working with global financial organisation to onboard onto AWS",
    'desc_2': "This website is run using AWS Codebuild, CodePipeline, S3, Lambda, SNS and GitHub",
    'image': {
      'desc': "AWS logo",
      'src': "images/aws_logo_smile.png",
      'comment': ""
    }
  },
  {
    'title': "Azure",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    'image': {
      'desc': "A Serveress Portfolio",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Google Cloud",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    'image': {
      'desc': "example screenshot of a project involving css",
      'src': "images/example3.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
