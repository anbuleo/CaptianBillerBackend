import env from 'dotenv'


env.config()


let url = process.env.SMS_URL
let API = process.env.API_KEY_SMS
export const sendSms = async()=>{


    try {
        const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
            method: "POST",
            headers: {
              authorization: API, // Store API key in .env
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              route: "dlt",
              message: `Test`,
              language: "english",
              numbers: '9003241548',
            }),
          });
      
          const data = await response.json();
          // res.json({ success: true, data });
          console.log(data)

        
    } catch (error) {
        console.log(error)
    }
}



