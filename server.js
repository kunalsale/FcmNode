var app = require('express')();
var bodyParser = require('body-parser');
var User = require('./mongo/user');
let PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

app.post('/register',function(req,res)
{
	console.log('REgister');
	console.log(req.body.userName+" "+req.body.userNumber);
	var user = new User();
	let name = req.body.userName;
	let number = req.body.userNumber;
	
	user.userName = name;
	user.userNumber = number;
	
	User.findOne({"userNumber":number},function(err,data)
	{
		if(err)
		{
		return;
		}
		if(data)
		{
		console.log("Exist"+data);
		return;
		}
		
		user.save(function(err,data)
		{
			if(err)
			{
			  console.log(err);	
		 	 return;  
			}
			console.log(data);
			res.send(data);
		});
		});
});

app.get('/users',function(req,res)
{
	User.find({},function(err,data)
	{
	if(err)
	{	
		return err;
	}
	console.log(data);
	});
});

app.listen(PORT , function()
{
	console.log("Listening");
});
