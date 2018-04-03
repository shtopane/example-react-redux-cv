import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../index';
import { CVBaseDataObj } from '../../actions/base_data';
import * as Modal from 'react-modal';
import CVBaseDataForm from '../forms/CVBaseDataForm';

interface StateProps {
    baseData: CVBaseDataObj;
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
                    <h1 className="header">{props.baseData.fullName}</h1>
                    <p>{props.baseData.position}</p>

                    <p className="address">
                        <span className="item">{props.baseData.phone}</span>
                        <span className="item">{props.baseData.email}</span>
                        <span className="item">{props.baseData.address}</span>
                    </p>
                </div>

                <Modal
                    isOpen={state.formOpen}
                    onRequestClose={this.toggleFormState}
                    closeTimeoutMS={250}
                    bodyOpenClassName="modal-opened"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <CVBaseDataForm onSubmit={this.toggleFormState} />
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    baseData: state.cv.baseData
});

export default connect(mapStateToProps)(CVSummary);
