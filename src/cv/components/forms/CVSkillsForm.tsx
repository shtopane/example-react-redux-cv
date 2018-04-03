import * as React from 'react';
import { reduxForm, InjectedFormProps, FieldArray, Field } from 'redux-form';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../../index';
import { CVSkillList, CVSkills, cvSkillsUpdate, CVSkillsUpdateAction } from '../../actions/skills';

interface StateProps {
    skills: CVSkillList;
}

interface DispatchProps {
    cvSkillsUpdate: typeof cvSkillsUpdate;
}

interface OwnProps {
    onSubmit: () => void;
}

interface Props extends OwnProps, StateProps, DispatchProps, InjectedFormProps {}

const renderSkills = (fieldArray: any) => {

    const fieldProps = {
        className: 'form-control small',
        type: 'text',
        required: true
    };

    return (
        <div>
            {fieldArray.fields.map((member: any, index: number) => (
                <div key={index}>
                    <div className="form-group">
                        <label>Skills group name</label>
                        <Field
                            {...fieldProps}
                            component="input"
                            name={`${member}.group`}
                            placeholder="Name of a group"
                        />
                    </div>

                    <div className="form-group">
                        <label>Skills</label>
                        <Field
                            {...fieldProps}
                            component="textarea"
                            name={`${member}.items`}
                            placeholder="List your skills"
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
                    Add skill group
                </button>
            </div>
        </div>
    );
};

const CVSkillsForm: React.SFC<Props> = props => {

    const handleSubmit = (form: CVSkills) => {
        props.cvSkillsUpdate(form.skills);
        props.onSubmit();
    };

    return (
        <form onSubmit={props.handleSubmit(handleSubmit)}>
            <div className="modal-header">Edit skills</div>

            <div className="modal-body">
                <FieldArray name="skills" component={renderSkills} />
            </div>

            <div className="modal-footer">
                <button className="btn btn-success" type="submit">Save</button>
                <button className="btn btn-default" type="button" onClick={props.onSubmit}>Close</button>
            </div>
        </form>
    );
};

const mapStateToProps = (state: AppState) => ({
    skills: state.cv.skills,
    initialValues: {
        skills: state.cv.skills
    }
});

const mapDispatchToProps = (dispatch: Dispatch<CVSkillsUpdateAction>) => ({
    ...bindActionCreators({cvSkillsUpdate}, dispatch)
});

export default compose(
    connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'cvSkills'})
)(CVSkillsForm);
