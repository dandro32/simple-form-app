import React from 'react';
import { getData} from './../service/services';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        };
    }

    componentDidMount() {
        this.getResults();
    }

    componentWillReceiveProps() {
        this.getResults();
    }

    getResults() {
        console.log(this.props);
        getData().then(data=>{
            this.setState({
                result: data
            })
        }).catch(err => {
            alert(err);
        });
    }


    render() {
        return (
            <div className="col-md-6">
                <h1>Results</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.result.map(data =>
                            <tr key={data._id}>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.email}</td>
                                <td>{data.date}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Results;