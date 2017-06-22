import React, {PureComponent} from 'react';


export default class ReportInput extends PureComponent {
    constructor(props) {
        super(props);


        /**
         * State of the application
         * Using uploadedImages as an array to store base64 of all the images
         *
         * Default values for all the other variables has been added
         *
         * @type {Object}
         */
        this.state = {
          mainTitle: 'SI',
          currentClass: '',
          title: '',
          uploadedImages: []
        }
    }

    render() {
        return (
            <div className="content">
              jj

            </div>
        );
    }
}
