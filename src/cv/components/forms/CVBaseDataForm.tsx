import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { AppState } from '../../../index';
import { CVBaseDataObj, cvBaseDataUpdate, CVBaseDataUpdateAction } from '../../actions/base_data';

interface StateProps {
    baseData: CVBaseDataObj;
}

interface DispatchProps {
    cvBaseDataUpdate: typeof cvBaseDataUpdate;
}

interface FormProps {
    cvFullName: string;
    cvPosition: string;
    cvEmail: string;
    cvPhone: string;
    cvAddress: string;
}

interface OwnProps {
    onSubmit: () => void;
}

interface Props extends OwnProps, StateProps, DispatchProps, InjectedFormProps {}

const CVBaseDataForm: React.SFC<Props> = props => {

    const handleSubmit = (form: FormProps) => {
        props.cvBaseDataUpdate({
            fullName: form.cvFullName,
            position: form.cvPosition,
            phone: form.cvPhone,
            email: form.cvEmail,
            address: form.cvAddress
        });
        props.onSubmit();
    };

    return (
        <form onSubmit={props.handleSubmit(handleSubmit)}>

            <div className="modal-header">Edit your basic data</div>

            <div className="modal-body">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Full name</label>
                            <Field
                                className="form-control"
                                type="text"
                                name="cvFullName"
                                component="input"
                                placeholder="Your full name"
                                required={true}
                            />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Specialization</label>
                            <Field
                                className="form-control"
                                type="text"
                                name="cvPosition"
                                component="input"
                                placeholder="Your specialization"
                                required={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Phone</label>
                            <Field
                                className="form-control"
                                type="text"
                                name="cvPhone"
                                component="input"
                                placeholder="Phone number"
                                required={true}
                            />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <Field
                                className="form-control"
                                type="text"
                                name="cvEmail"
                                component="input"
                                placeholder="E-mail address"
                                required={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <Field
                        className="form-control"
                        type="text"
                        name="cvAddress"
                        component="input"
                        placeholder="Your address"
                        required={true}
                    />
                </div>
            </div>

            <div className="modal-footer">
                <button className="btn btn-success" type="submit">Save</button>
                <button className="btn btn-default" type="button" onClick={props.onSubmit}>Close</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state: AppState) => ({
    baseData: state.cv.baseData,
    initialValues: {
        cvFullName: state.cv.baseData.fullName,
        cvPosition: state.cv.baseData.position,
        cvEmail: state.cv.baseData.email,
        cvPhone: state.cv.baseData.phone,
        cvAddress: state.cv.baseData.address
    }
});

const mapDispatchToProps = (dispatch: Dispatch<CVBaseDataUpdateAction>) => ({
    ...bindActionCreators({cvBaseDataUpdate}, dispatch)
});

export default compose(
    connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'cvBaseData'})
)(CVBaseDataForm);
