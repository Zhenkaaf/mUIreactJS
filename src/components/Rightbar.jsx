import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box
        position="fixed"
        width={300}
      >
        <Typography
          variant="h6"
          fontWeight={100}
        >
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgQLWDNlOCfw0pNh1mfJGOmz2_aWkYRGuug&usqp=CAU"
          />
          <Avatar
            alt="Travis Howard"
            src="data:image/jpeg;base64,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"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.kino-teatr.ru/acter/foto/ros/494.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src=""
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.glavred.info/2019_09/1569132614-9979.jpg?r=371553"
          />
          <Avatar
            alt="Agnes Walker"
            src=""
          />
          <Avatar
            alt="Agnes Walker"
            src=""
          />
          <Avatar
            alt="Agnes Walker"
            src=""
          />
        </AvatarGroup>
        <Typography
          variant="h6"
          fontWeight={100}
          mt={2}
        >
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={100}
          gap={5}
        >
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
        </ImageList>
        <Typography
          variant="h6"
          fontWeight={100}
          mt={2}
          mb={2}
        >
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgQLWDNlOCfw0pNh1mfJGOmz2_aWkYRGuug&usqp=CAU"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
            variant="inset"
            component="li"
          />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="data:image/jpeg;base64,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"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
            variant="inset"
            component="li"
          />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
