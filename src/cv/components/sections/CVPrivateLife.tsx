import * as React from 'react';
import { connect } from 'react-redux';
import { CVPrivateLifeObj } from '../../actions/private_life';
import { AppState } from '../../../index';
import * as Modal from 'react-modal';
import CVPrivateLifeForm from '../forms/CVPrivateLifeForm';

interface StateProps {
    privateLife: CVPrivateLifeObj;
}

interface Props extends StateProps {}

interface State {
    formOpen: boolean;
}

class CVPrivateLife extends React.Component<Props, State> {

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
                    <h2 className="title">Private life</h2>
                    <p>{props.privateLife}</p>
                </div>

                <Modal
                    isOpen={state.formOpen}
                    onRequestClose={this.toggleFormState}
                    closeTimeoutMS={250}
                    bodyOpenClassName="modal-opened"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <CVPrivateLifeForm onSubmit={this.toggleFormState} />
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    privateLife: state.cv.privateLife
});

export default connect(mapStateToProps)(CVPrivateLife);
