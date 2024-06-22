import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/common/ui/navigation-menu";
import { navServicesChild } from "@/utils/servicesSeed";
import NavContentItem from "./item/NavContentItem";

const NavMenu = () => {
  const itemClass: string = "px-2";

  const triggerClass: string =
    "bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl transition-all duration-300 ease-in-out";

  const linkClass: string =
    "inline-flex items-center justify-center bg-transparent text-lg focus:bg-cgreen focus:text-white hover:bg-cpurple/50 hover:text-white data-[state=open]:bg-cpurple/50 rounded-3xl px-4 py-2 transition-all font-medium duration-300 ease-in-out";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={linkClass}>
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className={itemClass}>
          <NavigationMenuTrigger className={triggerClass}>
            Pediatría
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavContentItem
              imageItem={{
                title: "Pediatría",
                image: "nav/pediatria.jpg",
                imageAlt: "Fondo pediatría",
              }}
              services={navServicesChild}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className={itemClass}>
          <NavigationMenuTrigger className={triggerClass}>
            Adulto
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavContentItem
              imageItem={{
                title: "Adulto",
                image: "nav/adulto.jpg",
                imageAlt: "Fondo adulto",
              }}
              services={navServicesChild}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className={itemClass}>
          <NavigationMenuLink href="#equipo" className={linkClass}>
            Equipo
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className={itemClass}>
          <NavigationMenuLink href="#contacto" className={linkClass}>
            Contacto
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
