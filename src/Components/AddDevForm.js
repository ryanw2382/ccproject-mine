import React from 'react';
import {Props as value} from "connected-fields";

class AddDevForm extends React.Component {
    createDev(event) {
        event.preventDefault();
        console.log('Gonna make some Devs!!');
        const dev = {
            developer: developer.value,
            email: this.email.value,
            title: this.title.value,
            shortDesc: this.shortDesc.value,
            cityState: this.cityState.value,
            phoneNumber: this.phoneNumber.value,
            languages: this.languages.value,
            facebookLink: this.facebookLink.value,
            twitterLink: this.twitterLink.value,
            githubLink: this.githubLink.value,
            workExperience: this.workExperience.value,
            education: this.education.value,
            image: this.image.value
        };
        this.props.addDev(dev);
        this.devForm.reset();
    }

    render() {
        return (
            <form
                ref={(input) => this.devForm = input}
                className="dev-edit"
                onSubmit={(e) => this.createDev(e)}
            >
                <input
                    ref={(input) => this.developer = input}
                    type="text"
                    placeholder="Developer Name"
                />
                <input
                    ref={(input) => this.email = input}
                    type="text"
                    placeholder="Developer Email"
                />
                <input
                    ref={(input) => this.title = input}
                    type="text"
                    placeholder="Developer Title"
                />
                <textarea
                    ref={(input) => this.shortDesc = input}
                    type="text"
                    placeholder="Developer Short Description or Tagline"
                />
                <input
                    ref={(input) => this.cityState = input}
                    type="text"
                    placeholder="Developer City & State"
                />
                <input
                    ref={(input) => this.phoneNumber = input}
                    type="text"
                    placeholder="Developer Phone Number"
                />
                <input
                    ref={(input) => this.languages = input}
                    type="text"
                    placeholder="Developer Languages"
                />
                <input
                    ref={(input) => this.facebookLink = input}
                    type="text"
                    placeholder="Developer Facebook Link"
                />
                <input
                    ref={(input) => this.twitterLink = input}
                    type="text"
                    placeholder="Developer Twitter Link"
                />
                <input
                    ref={(input) => this.githubLink = input}
                    type="text"
                    placeholder="Developer GitHub Link"
                />
                <textarea
                    ref={(input) => this.workExperience = input}
                    type="text"
                    placeholder="Developer Work Experience"
                />
                <textarea
                    ref={(input) => this.education = input}
                    type="text"
                    placeholder="Developer Education"
                />
                <input
                    ref={(input) => this.image = input}
                    type="text"
                    placeholder="Developer Image"
                />
                <button type="submit">Add Developer</button>
            </form>

        )
    }

}

AddDevForm.propTypes = {
    addDev: React.PropTypes.func.isRequired
};

export default AddDevForm;