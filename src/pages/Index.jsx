import React, { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Textarea, NumberInput, NumberInputField, Select } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  // State to hold the list of events
  const [events, setEvents] = useState([]);

  // Event form state
  const [eventForm, setEventForm] = useState({
    name: "",
    description: "",
    vipPrice: "",
    regularPrice: "",
    maxAttendees: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventForm({
      ...eventForm,
      [name]: value,
    });
  };

  // Add an event
  const addEvent = () => {
    // Here you would typically make an API request to your Laravel backend to create the event
    setEvents([...events, { ...eventForm, id: events.length + 1 }]);
  };

  // Update an event
  const updateEvent = (id) => {
    // Here you would typically make an API request to your Laravel backend to update the event
  };

  // Remove an event
  const removeEvent = (id) => {
    // Here you would typically make an API request to your Laravel backend to delete the event
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Event Management</Heading>
      <Stack spacing={4} mb={8}>
        <FormControl>
          <FormLabel htmlFor="name">Event Name</FormLabel>
          <Input id="name" name="name" value={eventForm.name} onChange={handleInputChange} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea id="description" name="description" value={eventForm.description} onChange={handleInputChange} />
        </FormControl>
        <Flex gap={4}>
          <FormControl>
            <FormLabel htmlFor="vipPrice">VIP Ticket Price</FormLabel>
            <NumberInput>
              <NumberInputField id="vipPrice" name="vipPrice" value={eventForm.vipPrice} onChange={handleInputChange} />
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="regularPrice">Regular Ticket Price</FormLabel>
            <NumberInput>
              <NumberInputField id="regularPrice" name="regularPrice" value={eventForm.regularPrice} onChange={handleInputChange} />
            </NumberInput>
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel htmlFor="maxAttendees">Max Attendees</FormLabel>
          <NumberInput>
            <NumberInputField id="maxAttendees" name="maxAttendees" value={eventForm.maxAttendees} onChange={handleInputChange} />
          </NumberInput>
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addEvent}>
          Add Event
        </Button>
      </Stack>
      <Heading size="md" mb={4}>
        Current Events
      </Heading>
      {events.map((event) => (
        <Flex key={event.id} align="center" justify="space-between" p={4} shadow="md" mb={4}>
          <Box>
            <Heading size="sm">{event.name}</Heading>
            <p>{event.description}</p>
          </Box>
          <Flex gap={2}>
            <Button leftIcon={<FaEdit />} colorScheme="yellow" size="sm" onClick={() => updateEvent(event.id)}>
              Edit
            </Button>
            <Button leftIcon={<FaTrash />} colorScheme="red" size="sm" onClick={() => removeEvent(event.id)}>
              Delete
            </Button>
          </Flex>
        </Flex>
      ))}
    </Box>
  );
};

export default Index;
