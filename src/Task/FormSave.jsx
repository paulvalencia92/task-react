import React from 'react'
import { useForm } from 'react-hook-form'

// material
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addTask, setSelectedTask, toggleShowFormSave, updateTask } from '../store/slices/taskSlice';
import { hideNotification, showNotification } from '../store/slices/notificationSlice';

export const FormSave = () => {



    const dispatch = useDispatch();
    const { taskForm } = useSelector(state => state.task);

    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        defaultValues: {
            ...taskForm
        }
    })

    const onSubmit = handleSubmit((data) => {
        if (data.id) {
            dispatch(updateTask(data));


            // show and closed notifiaction
            dispatch(showNotification({ message: 'Tarea actualizada', servery: 'success' }))
            setTimeout(() => dispatch(hideNotification()), 1000);


            dispatch(setSelectedTask(data));
            dispatch(toggleShowFormSave(false));




        } else {
            const id = crypto.randomUUID();
            data.id = id;
            dispatch(addTask(data))

            // show and closed notifiaction
            dispatch(showNotification({ message: 'Tarea creada', servery: 'success' }))
            setTimeout(() => dispatch(hideNotification()), 1000);

            reset();
        }



    })

    const cancelEdit = () => {
        dispatch(toggleShowFormSave(false));
    }


    return (
        <>
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
                                value: 200,
                                message: 'Máximo 100 caracteres'
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

                    {
                        taskForm.id
                            ?
                            <>
                                <Button
                                    type="submit"
                                    sx={{ mr: 2 }}
                                    variant="contained">
                                    Actualizar
                                </Button>


                                <Button
                                    onClick={cancelEdit}
                                    color='error'
                                    variant="outlined">
                                    Cancelar
                                </Button>
                            </>
                            :
                            <Button
                                type="submit"
                                variant="contained">
                                Guardar
                            </Button>


                    }

                </Box>

            </Box>


        </>
    )
}
