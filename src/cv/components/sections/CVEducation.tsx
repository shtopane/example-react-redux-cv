import * as React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { AppState } from '../../../index';
import { CVEducationList } from '../../actions/education';
import * as Modal from 'react-modal';
import CVEducationForm from '../forms/CVEducationForm';

interface StateProps {
    education: CVEducationList;
}

interface Props extends StateProps {}

interface State {
    formOpen: boolean;
}

class CVEducation extends React.Component<Props, State> {

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
                    <h2 className="title">Education</h2>

                    {map(props.education, (item, index) => (
                        <div className="subsection" key={index}>
                            <p className="subtitle">{item.specialization} @ {item.school}</p>
                            <p className="meta">{item.start} - {item.end}</p>
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
                    <CVEducationForm onSubmit={this.toggleFormState} />
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    education: state.cv.education
});

export default connect(mapStateToProps)(CVEducation);
