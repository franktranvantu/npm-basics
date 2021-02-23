var unsecurePlainTextPassword = 'password';

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
    console.log(hash);
  });
});