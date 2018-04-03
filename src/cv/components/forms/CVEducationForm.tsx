import * as React from 'react';
import { reduxForm, InjectedFormProps, FieldArray, Field } from 'redux-form';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../../index';
import { CVEducationList, CVEducations, cvEducationUpdate, CVEducationUpdateAction } from '../../actions/education';

interface StateProps {
    education: CVEducationList;
}

interface DispatchProps {
    cvEducationUpdate: typeof cvEducationUpdate;
}

interface OwnProps {
    onSubmit: () => void;
}

interface Props extends OwnProps, StateProps, DispatchProps, InjectedFormProps {}

const renderEducation = (fieldArray: any) => {

    const fieldProps = {
        className: 'form-control',
        type: 'text',
        required: true
    };

    return (
        <div>
            {fieldArray.fields.map((member: any, index: number) => (
                <div key={index}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Specialization</label>
                                <Field
                                    {...fieldProps}
                                    component="input"
                                    name={`${member}.specialization`}
                                    placeholder="Name of a specialization"
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>School name</label>
                                <Field
                                    {...fieldProps}
                                    component="input"
                                    name={`${member}.school`}
                                    placeholder="Name of a school"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Date of start</label>
                                <Field
                                    {...fieldProps}
                                    component="input"
                                    name={`${member}.start`}
                                    placeholder="Start date"
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Date of end</label>
                                <Field
                                    {...fieldProps}
                                    component="input"
                                    name={`${member}.end`}
                                    placeholder="End date"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="buttons">
                        <button
                            className="btn btn-danger btn-sm"
                            type="button"
                            onClick={() => fieldArray.fields.remove(index)}
                            disabled={fieldArray.fields.length <= 1}
                        >
                            Remove
                        </button>
                    </div>

                    <hr />
                </div>
            ))}

            <div className="buttons">
                <button className="btn btn-info" type="button" onClick={() => fieldArray.fields.push()}>
                    Add school
                </button>
            </div>
        </div>
    );
};

const CVEducationForm: React.SFC<Props> = props => {

    const handleSubmit = (form: CVEducations) => {
        props.cvEducationUpdate(form.education);
        props.onSubmit();
    };

    return (
        <form onSubmit={props.handleSubmit(handleSubmit)}>

            <div className="modal-header">Edit education information</div>

            <div className="modal-body">
                <FieldArray name="education" component={renderEducation} />
            </div>

            <div className="modal-footer">
                <button className="btn btn-success" type="submit">Save</button>
                <button className="btn btn-default" type="button" onClick={props.onSubmit}>Close</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state: AppState) => ({
    education: state.cv.education,
    initialValues: {
        education: state.cv.education
    }
});

const mapDispatchToProps = (dispatch: Dispatch<CVEducationUpdateAction>) => ({
    ...bindActionCreators({cvEducationUpdate}, dispatch)
});

export default compose(
    connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'cvEducation'})
)(CVEducationForm);
