import React from 'react';
import classes from './FooterStyles.module.css';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Link } from '@material-ui/core';


const Footer=()=> {

    return(
      <Box
      className={classes.footerStyle}
      bgcolor="text.secondary" 
      color="white"
      >
          <Container maxWidth="lg">
              <Grid container spacing={5} style = {{margin:0, width: '100%'}}>
              {/*<div style = {{display:'flex'}}>*/}
              <Grid item xs={4} sm={3} style = {{textAlign:'center', padding:5}}>
                        <Box>
                            <Link href="/" color="inherit">
                            Disclaimer
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} style = {{textAlign:'center',padding:5}}>
                        <Box>
                            <Link href="/" color="inherit">
                            Site Map
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} style = {{textAlign:'center',padding:5}}>
                        <Box>
                            <Link href="/" color="inherit">
                            Anti Ragging
                            </Link>
                        </Box>
                    </Grid>
             {/* </div>*/}
                  
                  <Grid item xs={12} sm={3} style = {{textAlign:'center',padding:5}}>
                      <Box>
                          Developed by Aptx Pvt. Ltd.
                      </Box>
                  </Grid>  
              </Grid>            
          </Container>
      </Box>

    )
}

export default Footer