The road so far:
    - api folder: 
        Created a new folder called "Profile" to a get into the profile endpoint to return when we reach profile page
    
    - profile page folder:
        Created the page itself in the index file importing the styles
        TBD: Create a component in path "component/Profile/index.jsx" to split the code according to our pattern and just call the component the path "pages/app/ProfilePage/index.js"


1- When landing on profile page:
    - A get should be made to profile endpoint to retrieve the main user default profile picture (if it's a fresh account || profile picture wasn't changed)
    - Display the Add profile button
    - Display a button to edit profile (should open a modal)

2- Fazer os botoes clickable ter ação
    - when landing on profile page, click in Add Profile
        - Who's Reading component should hidden
        - Modal Add new profile should be displayed (done, but need to make "cancel" action to hide the modal)

3- Submit new profile
    - Should add a new profile with name and picture
    - Should create a new <li> at the left of the Add Profile button

4- Edit profile
    - When clicking on edit profile button a modal should be opened with the profile data
        - If the profile data match with the account email (can be hardcoded to the first profile): 
            . Email
            . Name
            . Profile picure fields can bu updated
            . When save button is hit should make a PUT to "user/profile" with the changed data

5- Enhancement
    - Profiles can be deleted (except the main/first profile that contains the registed email)
    - On header navbar create an icon(button) with the profile picture
        - when clicked it expands and show the options
            . Edit profile
            . Logout