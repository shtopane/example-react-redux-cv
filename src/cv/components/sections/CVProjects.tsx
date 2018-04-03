import * as React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { CVProjectsList } from '../../actions/projects';
import { AppState } from '../../../index';
import * as Modal from 'react-modal';
import CVProjectsForm from '../forms/CVProjectsForm';

interface StateProps {
    projects: CVProjectsList;
}

interface Props extends StateProps {}

interface State {
    formOpen: boolean;
}

class CVProjects extends React.Component<Props, State> {

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
                    <h2 className="title">Projects</h2>

                    {map(props.projects, (project, index) => (
                        <div className="subsection" key={index}>
                            <p className="subtitle">{project.name}</p>
                            <p>{project.summary}</p>
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
                    <CVProjectsForm onSubmit={this.toggleFormState} />
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    projects: state.cv.projects
});

export default connect(mapStateToProps)(CVProjects);
