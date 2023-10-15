import { useEffect, useState } from "react";
import { getAuthToken } from "../../api/auth/login";
import { DefaultButton } from "../buttons/style";
import { ENDPOINT } from "../../utils/urls";
import axios from "axios";
import { Title, Form, ProfileImage, Input } from "./style";
import { updateProfile } from "../../api/profile/profile";

export function ProfileUpdate() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        const userToken = getAuthToken();
        setAuthToken(userToken);

        axios.get(ENDPOINT.profile, {
           headers: 
           {
              Authorization: `Bearer ${userToken}`,
           },
        })
          .then((response) => {
              const userData = response.data;
              setName(userData.name); 
              setEmail(userData.email); 
           })
            .catch((error) => {
              console.error('Error trying to recover users profile', error);
            });
        }, [authToken]);

    const handleCancel = (closeModal) => {
        closeModal();
    }

    const handleSubmitUpdateProfile = (e) => {
        e.preventDefault();
        const result = updateProfile(token, name, email);

        if (result.message === 'OK') {
            console.log('Profile updated!');
        } else {
            console.error('Error trying to update the users profile', result.data);
        }
    };

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <Form style={{justifyContent: 'left'}}>
                <Title>Edit Profile</Title>
                <ProfileImage />
                <Input 
                    placeholder="Name" 
                    type="text" 
                    value={name} 
                    onChange={(handleName)} 
                    required>
                </Input>
                <Input 
                    placeholder="Email"
                    type="text" 
                    value={email} 
                    onChange={(handleEmail)}
                    required>
                </Input>
                <DefaultButton 
                    style={{ marginTop: '10px'  }} 
                    onClick={handleSubmitUpdateProfile}> Submit
                </DefaultButton>
                <DefaultButton 
                    style={{ marginTop: '10px', backgroundColor:'grey' }} 
                    onClick={handleCancel}>Cancel
                </DefaultButton>
            </Form>  
        </>
    )
}

