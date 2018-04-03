import * as React from 'react';
import { connect } from 'react-redux';
import * as Modal from 'react-modal';
import { CVSummaryObj } from '../../actions/summary';
import { AppState } from '../../../index';
import CVSummaryForm from '../forms/CVSummaryForm';

interface StateProps {
    summary: CVSummaryObj;
}

interface Props extends StateProps {}

interface State {
    formOpen: boolean;
}

class CVSummary extends React.Component<Props, State> {

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
                    <h2 className="title">Summary</h2>
                    <p>{props.summary}</p>
                </div>

                <Modal
                    isOpen={state.formOpen}
                    onRequestClose={this.toggleFormState}
                    closeTimeoutMS={250}
                    bodyOpenClassName="modal-opened"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <CVSummaryForm onSubmit={this.toggleFormState} />
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    summary: state.cv.summary
});

export default connect(mapStateToProps)(CVSummary);
