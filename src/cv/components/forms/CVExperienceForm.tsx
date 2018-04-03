import * as React from 'react';
import { Field, FieldArray, InjectedFormProps, reduxForm } from 'redux-form';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../../index';
import {
    CVExperienceList,
    CVExperiences,
    cvExperienceUpdate,
    CVExperienceUpdateAction
} from '../../actions/experience';

interface StateProps {
    experience: CVExperienceList;
}

interface DispatchProps {
    cvExperienceUpdate: typeof cvExperienceUpdate;
}

interface OwnProps {
    onSubmit: () => void;
}

interface Props extends OwnProps, StateProps, DispatchProps, InjectedFormProps {}

const renderExperience = (fieldArray: any) => {

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
                                <label>Position</label>
                                <Field
                                    {...fieldProps}
                                    component="input"
                                    name={`${member}.position`}
                                    placeholder="Name of a position"
                                />
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Company</label>
                                <Field
                                    {...fieldProps}
                                    component="input"
                                    name={`${member}.company`}
                                    placeholder="Name of a company"
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
                                    name={`${member}.summary`}
                                    placeholder="End date"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Summary</label>
                        <Field
                            {...fieldProps}
                            component="textarea"
                            name={`${member}.end`}
                            placeholder="Summary of your responsibilities"
                        />
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
                    Add job
                </button>
            </div>
        </div>
    );
};

const CVExperienceForm: React.SFC<Props> = props => {

    const handleSubmit = (form: CVExperiences) => {
        props.cvExperienceUpdate(form.experience);
        props.onSubmit();
    };

    return (
        <form onSubmit={props.handleSubmit(handleSubmit)}>
            <div className="modal-header">Edit experience information</div>

            <div className="modal-body">
                <FieldArray name="experience" component={renderExperience} />
            </div>

            <div className="modal-footer">
                <button className="btn btn-success" type="submit">Save</button>
                <button className="btn btn-default" type="button" onClick={props.onSubmit}>Close</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state: AppState) => ({
    experience: state.cv.experience,
    initialValues: {
        experience: state.cv.experience
    }
});

const mapDispatchToProps = (dispatch: Dispatch<CVExperienceUpdateAction>) => ({
    ...bindActionCreators({cvExperienceUpdate}, dispatch)
});

export default compose(
    connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'cvExperience'})
)(CVExperienceForm);
