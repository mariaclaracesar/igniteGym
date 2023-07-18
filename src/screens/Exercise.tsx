import {
  Heading,
  HStack,
  Icon,
  VStack,
  Text,
  Image,
  Box,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            alt="Nome do exercicio"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}
            >
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml="2">
                  3 series
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml="2">
                  12 repeticoes
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
