import React from 'react'

const UserContext = React.createContext()//stvaramo globalni kontekst

const UserProvider = UserContext.Provider //dodeljujemo provajdera
const UserConsumer = UserContext.Consumer //dodjeljujemo onog ko konzumira ovaj kontekst


export { UserConsumer, UserProvider }
export default UserContext