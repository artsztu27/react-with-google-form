import './App.css';
import { Controller, useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { TextField, Typography, Alert  } from '@mui/material';
import { LoadingButton} from '@mui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@mui/icons-material/Close';

// import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
 const SCRIPT_URL = process.env.REACT_APP_SCRIPT_URL;



function App() {
  const formRef = useRef();
  const [loading, setLoading] = useState();
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      FirstName:'',
      LastName:'',
      CompanyName:'',
      CompanyEmail:'',
      CompanySize:'',
      JobTitle:'',
    },
  });
  /* const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
      console.log(result);
      setLoading(false);
      setOpen(true);
      reset();
      setOpen(false);
    } catch (e) {
      console.error('Error: ', e);
    }
  }; */
  const onSubmit = async (data) => {
      console.log('>>> Here is the data', data)
      setLoading(true);
      const postData ={
        "First Name":	data.FirstName,
        "Last Name":data.LastName,
        "Company Name":data.CompanyName,
        "Company Email":data.CompanyEmail,
        "Company Size":data.CompanySize,
        "Job Title":data.JobTitle,
        "Name":"12313",
        "mail":"ss@www",
      }
      fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(postData),
      }).then((response) => {
        console.log(response);
        setLoading(false);
        setOpen(true);
        reset();
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
        reset();
      })
      /* axios.defaults.headers.post['Content-Type'] = 'text/plain';
      axios.post(SCRIPT_URL, postData)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setOpen(true);
        reset();
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
        reset();
      })
     fetch(scriptURL, {
        method: "POST",
        body:postData,

      }).then(res => {
        console.log(res);
        setLoading(false);
        setOpen(true);
        reset();
        })
      .catch(err => console.log(err))*/
      // appendSpreadsheet(postData);
  }

  const onAdd = async () => {
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  };
  return (
    <div className="App">
      <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Sava Success
          </Alert>
        </Collapse>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', display: 'flex', flexDirection: 'row',textAlign:'center', justifyContent:'center',alignContent:'center' }} >
           <div style={{ width: '50%', display: 'flex', flexDirection: 'row',textAlign:'center', padding:'10px 10px', justifyContent:'center',alignContent:'center' }}>
                <Typography>First Name</Typography>
                <Controller
                    name={'FirstName'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'First Name Required',
                        },
                    }}
                    render={({ field }) => <TextField placeholder="First Name" error={!!errors?.FirstName} helperText={errors?.FirstName?.message} {...field} />}
                />
            </div>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'row',textAlign:'center', padding:'10px 10px', justifyContent:'center',alignContent:'center' }}>
                <Typography>Last Name</Typography>
                <Controller
                    name={'LastName'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Last Name Required',
                        },
                    }}
                    render={({ field }) => (
                        <TextField placeholder="Last Name" error={!!errors?.LastName} helperText={errors?.LastName?.message} {...field} />
                    )}
                />
            </div>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'row',textAlign:'center', padding:'10px 10px', justifyContent:'center',alignContent:'center' }}>
                <Typography>Company Name</Typography>
                <Controller
                    name={'CompanyName'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Company Name Required',
                        },
                    }}
                    render={({ field }) => (
                        <TextField placeholder="Company Name" error={!!errors?.CompanyName} helperText={errors?.CompanyName?.message}  {...field} />
                    )}
                />
            </div>
            <div style={{ width: '50%', display: 'flex', flexDirection: 'row',textAlign:'center', padding:'10px 10px', justifyContent:'center',alignContent:'center' }}>
                <Typography>Company Email</Typography>
                <Controller
                    name={'CompanyEmail'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Company Email Required',
                        },
                    }}
                    render={({ field }) => (
                        <TextField placeholder="Company Email" error={!!errors?.CompanyEmail} helperText={errors?.CompanyEmail?.message} {...field} />
                    )}
                />
            </div>
            <div style={{width: '50%', display: 'flex', flexDirection: 'row',textAlign:'center', padding:'10px 10px', justifyContent:'center',alignContent:'center' }}>
                <Typography>Company Size</Typography>
                <Controller
                    name={'CompanySize'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Company Size Required',
                        },
                    }}
                    render={({ field }) => (
                        <TextField placeholder="Company Size" error={!!errors?.CompanySize} helperText={errors?.CompanySize?.message} {...field} />
                    )}
                />
            </div>
            <div style={{width: '50%', display: 'flex', flexDirection: 'row',textAlign:'center', padding:'10px 10px', justifyContent:'center',alignContent:'center' }}>
                <Typography>Job Title</Typography>
                <Controller
                    name={'JobTitle'}
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: 'Job Title Required',
                        },
                    }}
                    render={({ field }) => (
                        <TextField placeholder="Job Title" error={!!errors?.JobTitle} helperText={errors?.JobTitle?.message} {...field} />
                    )}
                />
            </div>
        </form>
        <div>
            <LoadingButton
                sx={{ width: '20%', boxShadow: ' 0 3px 10px 0 rgba(0, 0, 0, 0.16)', borderRadius: '10px', marginTop:'20px' }}
                variant="contained"
                onClick={onAdd}
                loading={loading}
            >
                SUBMIT
            </LoadingButton>
        </div>
    </div>
  );
}

export default App;
