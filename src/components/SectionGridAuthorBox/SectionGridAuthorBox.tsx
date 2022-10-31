import CardAuthorBox from "components/CardAuthorBox/CardAuthorBox";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import CardAuthorBox3 from "components/CardAuthorBox3/CardAuthorBox3";
import CardAuthorBox4 from "components/CardAuthorBox4/CardAuthorBox4";
import Heading from "components/Heading/Heading";
import NavItem2 from "components/NavItem2";
import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Nav from "shared/Nav/Nav";
import SortOrderFilter from "./SortOrderFilter";

export interface SectionGridAuthorBoxProps {
  className?: string;
  sectionStyle?: "style1" | "style2";
  gridClassName?: string;
  boxCard?: "box1" | "box2" | "box3" | "box4";
  data?: any[];
}

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  boxCard = "box1",
  sectionStyle = "style1",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  data = Array.from("11111111"),
}) => {
  const [tabActive, setTabActive] = React.useState("Popular");

  const renderCard = (index: number) => {
    switch (boxCard) {
      case "box1":
        return (
          <CardAuthorBox
            index={index < 3 ? index + 1 : undefined}
            key={index}
          />
        );
      case "box2":
        return <CardAuthorBox2 key={index} />;
      case "box3":
        return <CardAuthorBox3 key={index} />;
      case "box4":
        return (
          <CardAuthorBox4
            authorIndex={index < 3 ? index + 1 : undefined}
            key={index}
          />
        );

      default:
        return null;
    }
  };

  const renderHeading1 = () => {
    return (
      <div className="mb-12 lg:mb-16  flex justify-between flex-col sm:flex-row">
        <Heading
          rightPopoverText="Creators"
          rightPopoverOptions={[
            {
              name: "Creators",
              href: "#",
            },
            {
              name: "Buyers",
              href: "#",
            },
          ]}
          className="text-neutral-900 dark:text-neutral-50"
        >
          Popular
        </Heading>
        <div className="mt-4 sm:mt-0">
          <SortOrderFilter />
        </div>
      </div>
    );
  };

  const renderHeading2 = () => {
    return (
      <div>
        <Heading
          className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
          fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
          isCenter
          desc=""
        >
          Top List Creators.
        </Heading>
        <Nav
          className="p-1 bg-white dark:bg-neutral-800 rounded-full shadow-lg"
          containerClassName="mb-12 lg:mb-14 relative flex justify-center w-full text-sm md:text-base"
        >
          {[
            {
              name: "Popular",
              icon: ` <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4399 19.05L15.9599 20.57L18.9999 17.53" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.99 21.8101C10.17 21.8101 8.36004 21.3501 6.98004 20.4301C4.56004 18.8101 4.56004 16.1701 6.98004 14.5601C9.73004 12.7201 14.24 12.7201 16.99 14.5601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              `,
            },
            {
              name: "Following",
              icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5 19.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5 21.5V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.99 21.8101C10.17 21.8101 8.36004 21.3501 6.98004 20.4301C4.56004 18.8101 4.56004 16.1701 6.98004 14.5601C9.73004 12.7201 14.24 12.7201 16.99 14.5601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
              `,
            },
            {
              name: "New & Noteworthy",
              icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.48003 18.15C3.51003 17.59 2.91003 16.55 2.91003 15.42V8.58003C2.91003 7.46003 3.51003 6.41999 4.48003 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 11.0001C13.2869 11.0001 14.33 9.95687 14.33 8.67004C14.33 7.38322 13.2869 6.34009 12 6.34009C10.7132 6.34009 9.67004 7.38322 9.67004 8.67004C9.67004 9.95687 10.7132 11.0001 12 11.0001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 16.6601C16 14.8601 14.21 13.4001 12 13.4001C9.79 13.4001 8 14.8601 8 16.6601" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
               `,
            },
          ].map((item, index) => (
            <NavItem2
              key={index}
              isActive={tabActive === item.name}
              onClick={() => setTabActive(item.name)}
            >
              <div className="flex items-center justify-center sm:space-x-2.5 text-xs sm:text-sm ">
                <span
                  className="hidden sm:inline-block"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                ></span>
                <span>{item.name}</span>
              </div>
            </NavItem2>
          ))}
        </Nav>
      </div>
    );
  };

  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      {sectionStyle === "style1" ? renderHeading1() : renderHeading2()}
      <div className={`grid gap-4 md:gap-7 ${gridClassName}`}>
        {data.map((_, index) => renderCard(index))}
      </div>
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5">
        <ButtonSecondary>Show me more </ButtonSecondary>
        <ButtonPrimary>Become a author</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridAuthorBox;
