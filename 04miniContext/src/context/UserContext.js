import React from 'react'

const UserContext = React.createContext();
// This context can be used to provide user-related data throughout the application
// It can be used to manage user authentication, profile information, etc.
// You can wrap your components with UserContext.Provider to provide values to the context
// You can also use UserContext.Consumer to access the context values in child components
export default UserContext; 