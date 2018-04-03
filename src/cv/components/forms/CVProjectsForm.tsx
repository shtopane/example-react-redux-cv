import * as React from 'react';
import { reduxForm, InjectedFormProps, FieldArray, Field } from 'redux-form';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { CVProjects, CVProjectsList, cvProjectsUpdate, CVProjectsUpdateAction } from '../../actions/projects';
import { connect } from 'react-redux';
import { AppState } from '../../../index';

interface StateProps {
    projects: CVProjectsList;
}

interface DispatchProps {
    cvProjectsUpdate: typeof cvProjectsUpdate;
}

interface OwnProps {
    onSubmit: () => void;
}

interface Props extends OwnProps, StateProps, DispatchProps, InjectedFormProps {}

const renderProjects = (fieldArray: any) => (
    <div>
        {fieldArray.fields.map((member: any, index: number) => (
            <div key={index}>
                <div className="form-group">
                    <label>Project name</label>
                    <Field
                        className="form-control"
                        name={`${member}.name`}
                        type="text"
                        component="input"
                        placeholder="Name of a project"
                        required={true}
                    />
                </div>

                <div className="form-group">
                    <label>Summary</label>
                    <Field
                        className="form-control"
                        name={`${member}.summary`}
                        type="text"
                        component="textarea"
                        placeholder="Summary of a project"
                        required={true}
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
                Add project
            </button>
        </div>
    </div>
);

const CVProjectsForm: React.SFC<Props> = props => {

    const handleSubmit = (form: CVProjects) => {
        props.cvProjectsUpdate(form.projects);
        props.onSubmit();
    };

    return (
        <form onSubmit={props.handleSubmit(handleSubmit)}>

            <div className="modal-header">Edit projects</div>

            <div className="modal-body">
                <div className="form-group">
                    <FieldArray name="projects" component={renderProjects} />
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
    projects: state.cv.projects,
    initialValues: {
        projects: state.cv.projects
    }
});

const mapDispatchToProps = (dispatch: Dispatch<CVProjectsUpdateAction>) => ({
    ...bindActionCreators({cvProjectsUpdate}, dispatch)
});

export default compose(
    connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'cvProjects'})
)(CVProjectsForm);
