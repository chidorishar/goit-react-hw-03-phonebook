import { PropTypes } from 'prop-types';
import { Box } from 'components/common/Box/Box.styled';
import { theme } from 'utils/theme';
import { ContactInfo, ContactsList, DeleteButton } from './ContactList.styled';

export function ContactList(props) {
  const { contacts, onContactRemoveCallback } = props;

  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <Box
          mb={[2]}
          p={[2]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          border="small"
          borderRadius="big"
          borderColor="#00000039"
          style={{
            boxShadow: theme.shadows.inputInset,
          }}
          transition="box-shadow normal"
          as="li"
          key={id}
        >
          <ContactInfo>
            {name}: {number}
          </ContactInfo>
          <DeleteButton
            onClick={() => onContactRemoveCallback(id)}
            isDelete={true}
          >
            Delete
          </DeleteButton>
        </Box>
      ))}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onContactRemoveCallback: PropTypes.func.isRequired,
};
