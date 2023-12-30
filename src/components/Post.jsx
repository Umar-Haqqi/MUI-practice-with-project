import { Comment, Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'


const Post = ({userName, date, photo, desp}) => {
    return (
        <>
            <Card sx={{ maxWidth: "100%", marginTop: "15px" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "lightgreen" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={userName}
                    subheader={date}
                />
                <CardMedia sx={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
                    component="img"
                    height="300"
                    image={photo}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {desp}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Comment />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>

            </Card>
        </>
    )
}

export default Post
