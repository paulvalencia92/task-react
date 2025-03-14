import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/slices/taskSlice';

export const FormSave = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        defaultValues: {
            name: '',
            description: '',
            isCompleted: false
        }
    })

    const onSubmit = handleSubmit((data) => {
        const id = crypto.randomUUID();
        data.id = id;
        dispatch(addTask(data))
        reset();

    })


    return (

        <Box
            onSubmit={onSubmit}
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' }, padding: '20px' }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    fullWidth
                    error={!!errors.name}
                    id="outlined-error"
                    label="Task name"
                    helperText={errors.name?.message}
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'El titulo es requerido'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Máximo 20 caracteres'
                        },
                        minLength: {
                            value: 2,
                            message: 'Mínimo 5 caracteres'
                        }
                    })
                    }
                />


                <TextField
                    fullWidth
                    error={!!errors.name}
                    id="outlined-error"
                    label="Description task"
                    helperText={errors.description?.message}
                    multiline
                    rows={4}
                    {...register('description', {
                        required: {
                            value: true,
                            message: 'La descripción es requerida'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Máximo 20 caracteres'
                        },
                        minLength: {
                            value: 2,
                            message: 'Mínimo 5 caracteres'
                        }
                    })
                    }
                />


            </div>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2, ml: 1 }}>
                <Button type="submit" variant="contained">Save</Button>
            </Box>

        </Box>
    )
}
