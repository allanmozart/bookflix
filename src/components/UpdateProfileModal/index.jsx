import { useEffect, useState } from "react";
import { getAuthToken } from "../../api/auth/login";
import { DefaultButton } from "../buttons/style";
import { ENDPOINT } from "../../utils/urls";
import axios from "axios";
import { Form } from "../AddNewProfileModal/style";
import { EmailInput, InputName, ProfileImageUpdate, Title } from "./style";
import { profile, updateProfile } from "../../api/profile/profile";

export function ProfileUpdate(closeModal) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        async function getProfile() {
            const userToken = setToken(getAuthToken());
            const response = await profile(userToken);
            console.log(response.data.data);
            setName(response.data.data.name);
            setEmail(response.data.data.email);
            setProfileImage(response.data.data.profile_picture);
        }
        getProfile();
    }, []);

    const handleCancel = () => {
        closeModal();
    }

    /*const handleSubmitUpdateProfile = (e) => {
        e.preventDefault();

        updateProfile(token, email, name)
         .then((result) => {
            if (result.message === 'OK') {
                console.log('Profile updated!');
            } else {
                console.error('Error trying to update the user\'s profile', result.data);
            }
         })
         .catch((error) => {
            console.error('Error trying to update the user\'s profile', error);
        });
    };*/

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
                <ProfileImageUpdate style={{ backgroundImage:`url(${profileImage})` }} />
                <InputName
                    placeholder="Name" 
                    type="text" 
                    value={name} 
                    onChange={handleName} 
                    required>
                </InputName>
                <EmailInput
                    placeholder="Email"
                    type="text" 
                    value={email} 
                    onChange={handleEmail}
                    required>
                </EmailInput>
                <DefaultButton 
                    style={{ marginTop: '10px'  }} 
                    onClick={''}> Submit
                </DefaultButton>
                <DefaultButton 
                    style={{ marginTop: '10px', backgroundColor:'grey' }} 
                    onClick={handleCancel}>Cancel
                </DefaultButton>
            </Form>  
        </>
    )
}

