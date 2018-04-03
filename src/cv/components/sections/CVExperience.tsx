import * as React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { AppState } from '../../../index';
import { CVExperienceList } from '../../actions/experience';
import * as Modal from 'react-modal';
import CVExperienceForm from '../forms/CVExperienceForm';

interface StateProps {
    experience: CVExperienceList;
}

interface Props extends StateProps {}

interface State {
    formOpen: boolean;
}

class CVExperience extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            formOpen: false
        };
    }

    toggleFormState = () => this.setState({formOpen: !this.state.formOpen});

    render() {
        Modal.setAppElement('#root');

        const {props, state} = this;

        return (
            <>
                <div className="section" onClick={this.toggleFormState}>
                    <h2 className="title">Experience</h2>

                    {map(props.experience, (item, index) => (
                        <div className="subsection" key={index}>
                            <p className="subtitle">{item.position} @ {item.company}</p>
                            <p className="meta">{item.start} - {item.end}</p>
                            <p>{item.summary}</p>
                        </div>
                    ))}
                </div>

                <Modal
                    isOpen={state.formOpen}
                    onRequestClose={this.toggleFormState}
                    closeTimeoutMS={250}
                    bodyOpenClassName="modal-opened"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <CVExperienceForm onSubmit={this.toggleFormState} />
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    experience: state.cv.experience
});

export default connect(mapStateToProps)(CVExperience);
