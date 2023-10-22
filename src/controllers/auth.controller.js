const signUp = (req, res) => res.send('Signing up');

const signIn = (req, res) => res.send('Signing in');

const signOut = (req, res) => res.send('Signing out');

const getProfile = (req, res) => res.send('My Profile');

export { signUp, signIn, signOut, getProfile };