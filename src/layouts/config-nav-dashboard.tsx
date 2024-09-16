import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Домашняя страница',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Пользователи',
    path: '/user',
    icon: icon('ic-user'),
  },
  {
    title: 'Вещи',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
  {
    title: 'Блог',
    path: '/blog',
    icon: icon('ic-blog'),
  },
  {
    title: 'Войти',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  {
    title: 'Создать аккаунт',
    path: '/sign-up',
    icon: icon('ic-lock'),
  },
  {
    title: 'Не найдено',
    path: '/404',
    icon: icon('ic-disabled'),
  },
];
