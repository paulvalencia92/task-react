import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const Notification = ({ showNotification, message, severity }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={showNotification}
            autoHideDuration={1000}
        >
            <Alert
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}
