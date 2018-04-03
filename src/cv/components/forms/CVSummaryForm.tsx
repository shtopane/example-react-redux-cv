import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { CVSummaryObj, cvSummaryUpdate, CVSummaryUpdateAction } from '../../actions/summary';
import { AppState } from '../../../index';

interface StateProps {
    summary: CVSummaryObj;
}

interface DispatchProps {
    cvSummaryUpdate: typeof cvSummaryUpdate;
}

interface FormProps {
    cvSummary: string;
}

interface OwnProps {
    onSubmit: () => void;
}

interface Props extends OwnProps, StateProps, DispatchProps, InjectedFormProps {}

const CVSummaryForm: React.SFC<Props> = props => {

    const handleSubmit = (form: FormProps) => {
        props.cvSummaryUpdate(form.cvSummary);
        props.onSubmit();
    };

    return (
        <form onSubmit={props.handleSubmit(handleSubmit)}>
            <div className="modal-header">Edit summary</div>

            <div className="modal-body">
                <div className="form-group">
                    <label>Summary</label>
                    <Field
                        className="form-control large"
                        name="cvSummary"
                        component="textarea"
                        placeholder="Summary of you and your experience"
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
    summary: state.cv.summary,
    initialValues: {
        cvSummary: state.cv.summary
    }
});

const mapDispatchToProps = (dispatch: Dispatch<CVSummaryUpdateAction>) => ({
    ...bindActionCreators({cvSummaryUpdate}, dispatch)
});

export default compose(
    connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'cvSummary'})
)(CVSummaryForm);
