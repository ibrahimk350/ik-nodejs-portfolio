var nodemailer = 	require("nodemailer");
var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function (req, res)
{
    res.render('index');
});

router.get('/send',function(req,res)
{
    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', // sets automatically host, port and connection security settings
        auth: {
            user: "{InsertEmail}",
            pass: "{InsertPassword}"
        }
    });

    var toEmail = "{InsertEmail}";
    var mailOptions = {
        from: req.query.email, // sender address
        to: toEmail, // list of receivers
        subject : '[IbrahimK Website] - ' + req.query.subject,
        text : 'Email From: ' + req.query.name + ' <' + req.query.email + '>\n' + 'Message: ' + req.query.text
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, info)
    {
        if (error)
        {
            console.log(error);
            res.send("error");
        } else {
            console.log("Message sent: " + info);
            res.send("sent");
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.
    });
});

router.get('/projects/web/portfolio-site',function(req,res)
{
    res.sendFile('/projects/web/portfolio.html', { root: __dirname + '/../public/' });
});

router.get('/projects/web/ramadanmubarak',function(req,res)
{
    res.sendFile('/projects/web/ramadanmubarak.html', { root: __dirname + '/../public/' });
});

router.get('/projects/web/schoolsponsored',function(req,res)
{
    res.sendFile('/projects/web/schoolproject.html', { root: __dirname + '/../public/' });
});

router.get('/projects/web/ischool',function(req,res)
{
    res.sendFile('/projects/web/ischool.html', { root: __dirname + '/../public/' });
});

router.get('/projects/web/stratahealth',function(req,res)
{
    res.sendFile('/projects/web/stratahealth.html', { root: __dirname + '/../public/' });
});

router.get('/projects/web/irobotsite',function(req,res)
{
    res.sendFile('/projects/web/irobot.html', { root: __dirname + '/../public/' });
});




router.get('/projects/mobile/clerkbot',function(req,res)
{
    res.sendFile('/projects/mobile/clerkbot.html', { root: __dirname + '/../public/' });
});

router.get('/projects/mobile/pc',function(req,res)
{
    res.sendFile('/projects/mobile/pc.html', { root: __dirname + '/../public/' });
});

router.get('/projects/mobile/cyberstore',function(req,res)
{
    res.sendFile('/projects/mobile/cyberstore.html', { root: __dirname + '/../public/' });
});

router.get('/projects/mobile/fifo',function(req,res)
{
    res.sendFile('/projects/mobile/fifo.html', { root: __dirname + '/../public/' });
});

router.get('/projects/mobile/rma',function(req,res)
{
    res.sendFile('/projects/mobile/rma.html', { root: __dirname + '/../public/' });
});

router.get('/projects/mobile/mss',function(req,res)
{
    res.sendFile('/projects/mobile/mss.html', { root: __dirname + '/../public/' });
});




router.get('/projects/software/pdfmagic',function(req,res)
{
    res.sendFile('/projects/software/pdfmagic.html', { root: __dirname + '/../public/' });
});

router.get('/projects/software/votewebapp',function(req,res)
{
    res.sendFile('/projects/software/voteapp.html', { root: __dirname + '/../public/' });
});

router.get('/projects/software/gradebook',function(req,res)
{
    res.sendFile('/projects/software/gradebook.html', { root: __dirname + '/../public/' });
});

router.get('/projects/software/plsqlblocks',function(req,res)
{
    res.sendFile('/projects/software/plsqlblocks.html', { root: __dirname + '/../public/' });
});

router.get('/projects/software/courseregisteration',function(req,res)
{
    res.sendFile('/projects/software/register.html', { root: __dirname + '/../public/' });
});

router.get('/projects/software/rmiserver',function(req,res)
{
    res.sendFile('/projects/software/rmiserver.html', { root: __dirname + '/../public/' });
});