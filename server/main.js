import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish("allUsers", function(){
    return Meteor.users.find();
  });

  if ( Meteor.users.find().count() === 0 ) {
    let cResult = Accounts.createUser({
        username: 'admin',
        email: 'amanbayev@gmail.com',
        password: '4thebest',
        profile: {
            first_name: 'Talgat',
            last_name: 'Amanbayev',
            company: 'Kazakh Tourism',
        }
    });

    Roles.addUsersToRoles(cResult, 'admin');
  }
});
