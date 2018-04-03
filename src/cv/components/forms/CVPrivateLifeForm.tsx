import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { CVSummaryUpdateAction } from '../../actions/summary';
import { CVPrivateLifeObj, cvPrivateLifeUpdate } from '../../actions/private_life';
import { AppState } from '../../../index';

interface StateProps {
    privateLife: CVPrivateLifeObj;
}

interface DispatchProps {
    cvPrivateLifeUpdate: typeof cvPrivateLifeUpdate;
}

interface FormProps {
    cvPrivateLife: string;
}

interface OwnProps {
    onSubmit: () => void;
}

interface Props extends OwnProps, StateProps, DispatchProps, InjectedFormProps {}

const CVPrivateLifeForm: React.SFC<Props> = props => {

    const handleSubmit = (form: FormProps) => {
        props.cvPrivateLifeUpdate(form.cvPrivateLife);
        props.onSubmit();
    };

    return (
        <form onSubmit={props.handleSubmit(handleSubmit)}>
            <div className="modal-header">Edit private life information</div>

            <div className="modal-body">
                <div className="form-group">
                    <label>Private life</label>
                    <Field
                        className="form-control large"
                        name="cvPrivateLife"
                        component="textarea"
                        placeholder="Some your private (after hours) description"
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
    privateLife: state.cv.privateLife,
    initialValues: {
        cvPrivateLife: state.cv.privateLife
    }
});

const mapDispatchToProps = (dispatch: Dispatch<CVSummaryUpdateAction>) => ({
    ...bindActionCreators({cvPrivateLifeUpdate}, dispatch)
});

export default compose(
    connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps),
    reduxForm({form: 'cvPrivateLife'})
)(CVPrivateLifeForm);
