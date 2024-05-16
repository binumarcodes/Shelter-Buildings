import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ReviewCard = ({ name, role, company, quote }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 500, borderRadius: 3, paddingTop: 4, paddingBottom: 4, paddingRight: 3, paddingLeft: 3, margin: 'auto', marginBottom: 20, }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <img src="src/assets/images/client1.jpg" alt="Customer" style={{ width: 50, height: 50, marginRight: 10, borderRadius: "50%", objectFit: "cover" }} />
          <Box>
            <Typography variant="h6" >
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {role}, {company}
            </Typography>
          </Box>
        </Box>
            <hr />
        <Typography variant="h5" color="textSecondary" style={{fontSize: 18, marginTop: 20}}>
          "{quote}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
