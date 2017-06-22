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
          mainTitle: 'SHISHYA BEML PUBLIC SCHOOL',
          documentType: 'Activity',
          currentClass: 'Grade: VII B',
          title: 'Lesson: Chidiya ',
          sub: 'Sub: Hindi',
          uploadedImages: []
        }

        // binding functions

        this.saveReportDetails = this.saveReportDetails.bind(this);

        this.generateImagePreviews = this.generateImagePreviews.bind(this);
    }


    /**
     * Saves all the input values in the state
     *
     * It fetches the data-id from the elememt, which is the key in the state and blindly saves the input
     *
     */
    saveReportDetails(e) {
      const keyToBeSaved = e.currentTarget.getAttribute('data-id');

      this.setState({
        [keyToBeSaved]: e.target.value
      });
    }


    /**
     * Generates the base64 of each image and saves in the state
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    generateImagePreviews(e) {
      e.preventDefault();
      e.persist();

      this.setState({
        uploadedImages: []
      }, () => {
        const files = e.target.files;

        const imagesArray = [];

        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
           reader.onloadend = () => {
             imagesArray.push(reader.result);

             if (imagesArray.length === 4) {
               this.setState({
                 uploadedImages: imagesArray
               });
             }
           }

           reader.readAsDataURL(files[i])
        }
      });
    }


    renderImageSection () {

      if (!this.state.uploadedImages.length) {
        return (
          <div className="block text-a-c">
            <input
              className="fileInput"
              type="file"
              multiple
              onChange={this.generateImagePreviews}
             />
            <button className="button is-primary is-medium is-outlined">Upload Images</button>
          </div>
        )
      } else {
        return (
          <section className="section">
            <div className="columns">
              <div className="column">
                <img src={this.state.uploadedImages[0]} />
              </div>
              <div className="column">
                <img src={this.state.uploadedImages[1]} />
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <img src={this.state.uploadedImages[2]} />
              </div>
              <div className="column">
                <img src={this.state.uploadedImages[3]} />
              </div>
            </div>
          </section>

        )
      }
    }

    render() {
        return (
          <section className="section page-report-input">
            <div className="content">
              <div className="field">
                <p className="control">
                  <input
                    className="input text-a-c"
                    type="text"
                    placeholder="School name"
                    data-id="mainTitle"
                    value={this.state.mainTitle}
                    onChange={this.saveReportDetails}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input
                    className="input text-a-c"
                    type="text"
                    placeholder="Activity"
                    data-id="documentType"
                    value={this.state.documentType}
                    onChange={this.saveReportDetails}
                  />
                </p>
              </div>

              <div className="columns">
                <div className="column">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input text-a-l"
                        type="text"
                        placeholder="Activity"
                        data-id="currentClass"
                        value={this.state.currentClass}
                        onChange={this.saveReportDetails}
                      />
                    </p>
                </div>
              </div>
                <div className="column">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input text-a-r"
                        type="text"
                        placeholder="Subject"
                        data-id="sub"
                        value={this.state.sub}
                        onChange={this.saveReportDetails}
                      />
                    </p>
                </div>
              </div>
            </div>

            <div className="field">
              <p className="control">
                <input
                  className="input text-a-c"
                  type="text"
                  placeholder="Lesson Name"
                  data-id="title"
                  value={this.state.title}
                  onChange={this.saveReportDetails}
                />
              </p>
            </div>

            {this.renderImageSection()}

            <div className="block text-a-c">
              <button className="button is-success is-large">Generate PDF</button>
            </div>
          </div>
          </section>

        );
    }
}
