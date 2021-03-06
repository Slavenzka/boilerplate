import Button from 'components/atoms/Button/Button'
import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import { StoriesExportObject, StoriesListType } from 'stories/specs/index.spec'
import IconSearch from 'assets/icons/IconSearch'
import { ButtonVariants } from 'components/atoms/Button/Button.spec'

const listDefault: StoriesListType = [
  {
    heading: `Button - variant DEFAULT`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
      >
        Some button label
      </Button>
    ),
    code: (
`<Button
  onClick={() => alert(\`Button clicked!\`)}
>
  Some button label
</Button>
`
    )
  },
  {
    heading: `Link - variant DEFAULT`,
    component: (
      <Button
        url="https://google.com"
      >
        Some link label
      </Button>
    ),
    code: (
`
<Button
  url="https://google.com"
>
  Some link label
</Button>
`
    )
  },
]

const listIcon: StoriesListType = [
  {
    heading: `Button - variant ICON_DECORATED`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
        IconComponent={IconSearch}
        variant={ButtonVariants.ICON_DECORATED}
      >
        Some button label
      </Button>
    ),
    code: (
`
<Button
  onClick={() => alert(\`Button clicked!\`)}
  IconComponent={IconSearch}
  variant={ButtonVariants.ICON_DECORATED}
>
  Some button label
</Button>
`
    )
  },
  {
    heading: `Button - variant ICON_SIMPLE`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
        IconComponent={IconSearch}
        variant={ButtonVariants.ICON_SIMPLE}
      >
        Some button label
      </Button>
    ),
    code: (
`
<Button
  onClick={() => alert(\`Button clicked!\`)}
  IconComponent={IconSearch}
  variant={ButtonVariants.ICON_SIMPLE}
>
  Some button label
</Button>
`
    )
  },
]

const listLink: StoriesListType = [
  {
    heading: `Button - variant LINK`,
    component: (
      <Button
        onClick={() => alert(`Button clicked!`)}
        variant={ButtonVariants.LINK}
      >
        Some button label
      </Button>
    ),
    code: (
`
<Button
  onClick={() => alert(\`Button clicked!\`)}
  variant={ButtonVariants.LINK}
>
  Some button label
</Button>
`
    )
  },
]

export const DEFAULT = () => <ComponentRenderTemplateStory list={listDefault} />
export const ICON = () => <ComponentRenderTemplateStory list={listIcon} />
export const LINK = () => <ComponentRenderTemplateStory list={listLink} />

export default {
  title: `Components/Atoms/Button`,
  component: Button,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`Button`}
      componentDescription={(
        <>
          <span style={{display: `block`, margin: `1rem 0`}}>
            A button component that can render both button and link (web or client route depending on the url string).
            The main idea is to provide the default button state that simply renders children inside the button tag with options
            for extension via configuring variant and height props that should cause to render modified default button (e.g. with custom icon or
            with some other customization) via switch statement. Variant props define shape and colors while height props define sizes.
          </span>
          <span style={{display: `block`, margin: `1rem 0`}}>
            Be aware that default button state completely resets button styles including reset font-size to 0. So any variant
            that requires text content requires additional css text properties.
          </span>
        </>
      )}
      proptypesString={(
`
export enum ButtonVariants {
  DEFAULT = \`DEFAULT\`
}

export enum ButtonHeights {
  SMALL = \`SMALL\`,
  REGULAR = \`REGULAR\`,
  LARGE = \`LARGE\`
}

export enum ButtonTypes {
  BUTTON = \`button\`,
  SUBMIT = \`submit\`
}

export interface ExtraButtonProps {
  type: string
}

interface ExtraRouterLinkProps {
  to: string
}

interface ExtraLinkProps {
  href: string;
  rel: \`noopener norefferer\`,
  target: \`_blank\`
}

export type ExtraProps = ExtraButtonProps | ExtraRouterLinkProps | ExtraLinkProps

export interface ButtonAsButtonProps {
  /*
  * Adds styling for the loading state of the button
  */
  isLoading?: boolean;
  /*
  * Definition of button type
  */
  type?: string;
  /*
  * Button click handler
  */
  onClick?: ButtonClickHandlerType;
}

export interface ButtonAsLinkProps {
  /*
  * Triggers component to render a link instead of a button. If URL string contains "http" then it would be a web link,
  * and react router link otherwise.
  */
  url?: string;
}

export interface DefaultButtonProps extends PropsWithClassName {
  /*
  * Adds styling for the disabled state of the button
  */
  isDisabled?: boolean;
}

export interface ButtonProps extends PropsWithClassName, DefaultButtonProps, ButtonAsLinkProps, ButtonAsButtonProps {
  /*
  * Triggers button height style presets
  */
  height?: ButtonHeights;
  /*
  * Triggers custom button variant to render through the switch statement
  */
  variant?: ButtonVariants;
}
`
      )}
      defaultPropsString={(
`
Button.defaultProps = {
  height: ButtonHeights.REGULAR,
  type: ButtonTypes.BUTTON,
  variant: ButtonVariants.DEFAULT,
}
`
      )}
    />
  )]
} as StoriesExportObject