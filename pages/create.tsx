import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Grid, Typography, Box, Select, MenuItem, FormControl, TextField, RadioGroup, FormControlLabel, Radio, Button} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  customBoxStyle: {
    backgroundColor: 'rgba(47, 19, 74, 0.25)',
    padding: '7%',
    borderRadius: '10px',
    height: '100%',
  },

  customButtonStyle: {
    color:'white',
    borderRadius: '10px',
    background:'#471D67',
    borderColor:'#AB6FE9',
    borderWidth:'1px',
    borderStyle:'solid',
    width:'50%',
    fontSize:'12px',
  },

  titleStyle: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    fontSize:'30px',
    lineHeight:'40px',
    wordWrap:'break-word',
  },

  subtitleStyle: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    fontSize:'20px',
    wordWrap:'break-word',
  },

  customInputName: {
    background: 'white',
    borderRadius: '10px',
    color:'red',
    borderStyle:'none',
    borderColor:'transparent',
    width:'100%',
  },

  subContentStyle: {
    fontSize:'20px',
    wordWrap:'break-word',
  },

  subDescriptionStyle: {
    fontSize:'12px',
    wordWrap:'break-word',
  },
  
  rewardContainerStyle: {
    marginTop:'100px',
    marginLeft:'5%',
    wordWrap:'break-word',
  },

  customSelectItem: {
      backgroundColor: 'none',
      color:'black',
  },

  customInputDescription: {
    background: 'white',
    borderRadius: '10px',
    borderStyle:'none',
    borderColor:'transparent',
    width:'100%',
  },
}));


const Create: NextPage = () => {
  const classes = useStyles();

  const handleChange = () => {
      alert("ADF");
  };

  return (
    <Container className={classes.rewardContainerStyle}>
    <Box sx={{backgroundColor: 'rgba(47, 19, 74, 0.25)', p: 5, borderRadius: 3,}}>
    <Grid xs={12} container>
        <Grid xs={3}></Grid>
        <Grid xs={6} container>

            <Grid xs={12}>
                <Typography className={classes.titleStyle} variant="subtitle2" >List Your Item</Typography>
            </Grid>

            <Grid xs={12} sx={{mt:5,}} item >
                <FormControl fullWidth>
                    <Select
                        onChange={handleChange}
                        >
                        <MenuItem value={1}
                        className={classes.customSelectItem}
                        >Diamond White Card</MenuItem>
                        <MenuItem value={2}
                        className={classes.customSelectItem}
                        >Diamond Black Card</MenuItem>
                        <MenuItem value={3}
                        className={classes.customSelectItem}
                        >Diamond Purple Card</MenuItem>
                        <MenuItem value={4}
                        className={classes.customSelectItem}
                        >Diamond Golden Card</MenuItem>
                        <MenuItem value={5}
                        className={classes.customSelectItem}
                        >Diamond Rose Card</MenuItem>
                        <MenuItem value={6}
                        className={classes.customSelectItem}
                        >Diamond Gray Card</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid lg={12} sx={{mt:5}} container>
                <Grid lg={6} item>
                    <TextField
                    className={classes.customInputName}
                    placeholder={'Input NFT name.'}
                    />
                </Grid>

                <Grid lg={6}  sx={{pl:3}} item>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="Diamond" />
                        <FormControlLabel value="male" control={<Radio />} label="Citizen" />
                </RadioGroup>
                </Grid>
            </Grid>

            <Grid lg={12} sx={{mt: 5,}} item>
                <TextField
                className={classes.customInputDescription}
                placeholder={'Input description.'}
                />
            </Grid>

            <Grid lg={12} sx={{mt:5}}   container>
                <Grid lg={12} item>
                    <Typography className={classes.subtitleStyle} variant="subtitle2" >Preview NFT</Typography>
                </Grid>

                <Grid container lg={12} sx={{mt:5}} item>
                    <Grid lg={6} item>
                        <Box 
                            component="img"
                            src={"/images/util/ez1.gif"}                        
                            sx={{
                                height: 350,
                                width: 250,
                                borderRadius: 3,
                                marginBottom:5,
                                boxShadow: '0px 0px 4px 4px lightgray',
                            }} 
                        ></Box>
                    </Grid>
                    <Grid lg={6} container>
                        <Grid lg={12} container>
                            <Grid lg={7} item>
                                <TextField
                                className={classes.customInputDescription}
                                placeholder={'NFT Price.'}
                                />
                            </Grid>
                            <Grid lg={1}></Grid>
                            <Grid lg={4} item>
                                <FormControl sx={{backgroundColor:'none'}} fullWidth>
                                    <Select                                
                                        onChange={handleChange}
                                        sx={{backgroundColor:'none'}}
                                        >
                                        <MenuItem value={1}
                                        className={classes.customSelectItem}
                                        >BNB</MenuItem>
                                        <MenuItem value={2}
                                        className={classes.customSelectItem}
                                        >ETH</MenuItem>
                                        <MenuItem value={2}
                                        className={classes.customSelectItem}
                                        >AVAX</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        
                        <Grid lg={12} item>
                            <Typography>Original Price : </Typography>
                        </Grid>

                        <Grid lg={12} item>
                            <Typography>Daily Reward : </Typography>
                        </Grid>
                         
                        <Grid lg={12} item>
                            <Typography>Propertyes : </Typography>
                        </Grid>

                        <Grid lg={12} container>
                            <Grid lg={5} item>
                                <Button>Create</Button>
                            </Grid>
                            <Grid lg={2} item></Grid>
                            <Grid lg={5} item>
                                <Button>Create</Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
        <Grid xs={3}></Grid>
    </Grid>
    </Box>
    </Container>
  );
};

export default Create;