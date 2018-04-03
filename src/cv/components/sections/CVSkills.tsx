import * as React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { AppState } from '../../../index';
import { CVSkillList } from '../../actions/skills';
import * as Modal from 'react-modal';
import CVSkillsForm from '../forms/CVSkillsForm';

interface StateProps {
    skills: CVSkillList;
}

interface Props extends StateProps {}

interface State {
    formOpen: boolean;
}

class CVSkills extends React.Component<Props, State> {

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
                    <h2 className="title">Skills</h2>

                    {map(props.skills, (skill, index) => (
                        <div className="subsection" key={index}>
                            <p className="subtitle">{skill.group}</p>
                            <p>{skill.items}</p>
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
                    <CVSkillsForm onSubmit={this.toggleFormState} />
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    skills: state.cv.skills
});

export default connect(mapStateToProps)(CVSkills);
