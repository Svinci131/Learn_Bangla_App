export const Core = () => {
    return (
      <View style={styles.container}>
        <NavBar />
        <ContainerBody
            topic       = { topic }
            currentCard = { currentCard }
            onPress     = { onPress }
            onChange    = { onChange }
            count       = { count }
        />
      </View>
    )
}
