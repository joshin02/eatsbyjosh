import NavContainer from './SiteNavItem';

const Navigation = () => {
  const navItems = [
    {
      iconClass: 'fa-solid fa-house',
      link: '/',
      title: 'Home',
      description:
        "This is where I will highlight my current favorite dishes. I’ll also have all my most recent eats here as well. These posts will be more of an experience blog where I note where the inspo for the dish came from, highlights from cooking, lowlights or things I would change next time, and any other bloopers or notes!",
    },
    {
      iconClass: 'fa-regular fa-pen-to-square',
      link: '/recipes',
      title: 'Recipes',
      description:
        "Once I have tried making a dish a few times and feel it’s ready to share, the full list of ingredients, process, and key tips will be posted here! Make sure to check often to see when recipes get posted but also feel free to contact me if a recipe for a dish will be made available.",
    },
    {
      iconClass: 'fa-solid fa-burger',
      link: '/',
      title: "Chef's Choice!",
      description:
        "Honestly the best feature for indecisive people like me LOL. This will send you to a random recipe for you to try out for your next meal. If you’re like me, this will save you so much time scrolling or trying to think of something to cook and eat. And hopefully the recipes I post will be worth trying out hehe!",
    },
    {
      iconClass: 'fa-solid fa-utensils',
      link: '/reviews',
      title: 'Reviews',
      description:
        "Only thing I like more than cooking is probably eating! IF cooking is not your thing, don’t worry, I got something for you too. This is where I’ll post reviews for any place I eat out at, ranging from $ to $$$.",
    },
  ];

  return (
    <div>
      {navItems.map((item, index) => (
        <NavContainer
          key={index}
          iconClass={item.iconClass}
          link={item.link}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Navigation;