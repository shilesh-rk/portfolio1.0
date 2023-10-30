import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../assets/images/Foundation.png";
import project2 from "../assets/images/Calculator.png";
import project3 from "../assets/images/Form.png";
import project4 from "../assets/images/Adding Products.png";
import project5 from "../assets/images/ecom.png";
import project6 from "../assets/images/banking.png";
import Tech1 from "../assets/images/bootstrap-logo.png";
import Tech2 from "../assets/images/JAVASCRIPT-PIC.jpg";
import Tech3 from "../assets/images/react-js.jpg";
import Tech6 from "../assets/images/mern-stack.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
        justifyContent: 'center',
		background:"#222"
    },
	btn: {
		// color:"tan",
		background:"tomato",
		fontWeight:600
	},
	mainContainer: {
		background: "#233",
		height: "100%",
	},
	cardContainer: {
		maxWidth: 345,
		margin: "3rem auto",
		"&:hover": {
			"& $overlay": {
				opacity: 0.85,
			},
		},
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 170,
		background: "rgba(0, 0, 0, 0.7)",
		color: "#fff",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		opacity: 0,
		transition: "opacity 0.3s ease-in-out",
		"&:hover": {
			opacity: 1,
		},
	},
}));

const projects = [
	{
		name: "Foundation Website",
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
		consequatur magni quod nesciunt necessitatibus molestiae non
		eligendi, magnam est aliquam recusandae? Magnam soluta minus
		iste alias sunt veritatis nisi dolores!`,
		image: project1,
		tech: Tech1,
		link: "https://foundationpage-byshileshrk.netlify.app/",
	},
	{
		name: "Calculator",
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
		consequatur magni quod nesciunt necessitatibus molestiae non\
		eligendi, magnam est aliquam recusandae? Magnam soluta minus\
		iste alias sunt veritatis nisi dolores!`,
		image: project2,
		tech: Tech2,
		link: "https://rks-calculator.netlify.app/",
	},
	{
		name: "Employee Register",
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
		consequatur magni quod nesciunt necessitatibus molestiae non\
		eligendi, magnam est aliquam recusandae? Magnam soluta minus\
		iste alias sunt veritatis nisi dolores!`,
		image: project3,
		tech: Tech3,
		link: "https://react-fkdrxv.stackblitz.io/",
	},
	{
		name: "Mobile Store(Admin)",
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
		consequatur magni quod nesciunt necessitatibus molestiae non\
		eligendi, magnam est aliquam recusandae? Magnam soluta minus\
		iste alias sunt veritatis nisi dolores!`,
		image: project4,
		tech: Tech3,
		link: "https://react-vfqzbt.stackblitz.io/",
	},
	{
		name: "E-commerce",
		description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
		consequatur magni quod nesciunt necessitatibus molestiae non\
		eligendi, magnam est aliquam recusandae? Magnam soluta minus\
		iste alias sunt veritatis nisi dolores!`,
		image: project5,
		tech: Tech3,
		link: "",
	},
	{
		name: "Banking System",
		description: "This Banking System is experiencing some performance issues, specifically slow content loading times on the server.",
		span:'NOTE: Please be patient while Logging in or Registering.',
		image: project6,
		tech: Tech6,
		link: "https://onlinemybank.netlify.app/",
	},
];

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component='div' className={classes.mainContainer}>
			<Grid container justifyContent='center'>
				{/* Projects */}
				{projects.map((project, i) => (
					<Grid item xs={12} sm={8} md={4} key={i}>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='Project 1'
									height='140'
									image={project.image}
								/>
								<div className={classes.overlay}>
									<CardMedia
										component='img'
										alt='Project 1'
										height='140'
										image={project.tech}
									/>
								</div>
								<CardContent>
									<Typography variant='h5' gutterBottom>
										{project.name}
									</Typography>
									<Typography variant='body2' color='textSecondary'>
										{project.description}
									</Typography>
									<Typography variant="body2" color="textSecondary">{project.span}</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions classes={{root: classes.root}}>
								<Button
									size='small'
									classes={{root: classes.btn}}
									variant='contained'
									href={project.link}
									target='_blank'>
									Live Demo
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Portfolio;
