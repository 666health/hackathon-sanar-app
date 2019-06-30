import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

import ItemModal from './item';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  fab: {
    position: "fixed",
    right: "24px",
    bottom: "80px"
  }
}));

const alarms = [
  {
    title: "Minoxidil",
    description: 'Minoxidil é um fármaco capaz de reduzir a pressão arterial por promover vasodilatação potente e de longa duração. ',
    schedule: "A cada 8 horas",
    image: "https://unicpharma.vteximg.com.br/arquivos/ids/160163-292-292/Minoxidil-5--com-fator-de-crescimento-em-espuma-100ml.jpg?v=636711564924700000",
  },
  {
    title: "Amoxicilina",
    description: "Amoxicilina (substância ativa) é um antibiótico de amplo espectro indicado para o tratamento de infecções bacterianas.",
    schedule: "A cada 6 horas",
    image: "https://www.drogariaminasbrasil.com.br/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/medicamentos/drogariaminasbrasil_antibiotico_generico.jpg"
  },
  {
    title: "Tetraciclina",
    description: "Tetraciclina é um grupo de antibióticos naturais ou semi-sintéticos usados no tratamento de um amplo espectro de bactérias",
    schedule: "A cada 12 horas",
    image: "https://medquimica.ind.br/wp-content/uploads/produto/Gen%C3%A9rico-300x300.jpg",
  }
];


export default function FolderList() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(alarms[0])
  const [isOpen, setOpen] = React.useState(false)

  const selectItem = (selected) => {
    setSelected(selected)
    setOpen(true);
  }

  return (
    <div>
    <List className={classes.root}>
      {alarms.map((a) => (
        <>
        <ListItem onClick={() => selectItem(a)} button href="#">
          <ListItemAvatar>
            <Avatar>
              <Icon>alarm</Icon>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={a.title} secondary={a.schedule} />
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
    {/* <Fab onClick={} color="primary" aria-label="Add" className={classes.fab}>
      <Icon>add</Icon>
    </Fab> */}
    <ItemModal handleClose={() => setOpen()} isOpen={isOpen} item={selected} />
    </div>
  );
}
