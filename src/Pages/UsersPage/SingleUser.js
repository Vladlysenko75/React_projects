import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {jsonActionService} from "../../services/jsonAction.service";

export const SingleUser = () => {
    const params = useParams();
    const [user, setUser] = useState({})
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        jsonActionService.getUserById(params.id).then(value => setUser(value));
    }, [params.id, state])

    return (
        <div>
            {user && (
                <div>
                    <div>
                        UserID: {user.id}
                    </div>
                    <div>
                        Name: {user.name}
                    </div>
                    <div>
                        UserName: {user.username}
                    </div>
                    <div>
                        Email: {user.email}
                    </div>
                    <div>
                        Phone: {user.phone}
                    </div>
                    <div>
                        Website: {user.website}
                    </div>
                </div>
            )}
        </div>
    );
};
