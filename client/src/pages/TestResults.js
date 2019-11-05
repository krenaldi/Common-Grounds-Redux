import React, { useContext, useState } from 'react';
import UserProvider from '../context/UserProvider';
import Terminal from '../components/displays/Terminal';
import Column from '../components/wrappers/Column';
import DataTags from '../components/menus/DataTags';
import _ from 'lodash';

const LoginMsg = "Uh of, there's nothing to show! Login in to see how much of your personal data tech companies have at their disposal.";

const TestResults = () => {
    const [selected, setSelected] = useState("All");
    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData) ? LoginMsg: "Explore Your Data";
    const options = Object.keys(userData).filter(key => {
        return userData[key] !== null;
    });

    return ( 
        <div className="page">
            <p className="page-title" style={{ textAlign: "center"}}>
                {text}
            </p>
            <Column className="col-4" style={{ verticalAlign: "top"}}>
                <DataTags 
                    options={options} 
                    onClick={option => setSelected(option)} 
                    selected={selected}
                />
            </Column>

            <Column className="col-8">
                <Terminal 
                    userData={userData} 
                    selected={selected}
                />
            </Column>
            <div style={{ marginBottom: 20 }} />
        </div>
     );
};
 
export default TestResults;