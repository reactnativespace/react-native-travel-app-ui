import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeScreen = ({ route, navigation }) => {
    return (
        <View style={{
            flex: 1,
            padding: 16,
            backgroundColor: '#FFF'
        }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 32
            }}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: '600',
                    color: '#242424'
                }}>San Francisco</Text>
                <FontAwesome5 name='map' size={24} color='#EB5757' />
            </View>

            <Text style={{
                color: '#A3A3A3'
            }}>Choose another</Text>

            <View style={{
                backgroundColor: '#F8F8F8',
                padding: 16,
                marginTop: 16,
                borderRadius: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>

                <TextInput style={{
                    fontSize: 16,
                    color: '#A3A3A3'
                }}
                    placeholder='Enter a name or category' />

                <FontAwesome5 name='search' size={24} color='#B9B9B9' />

            </View>


            <Text style={{
                fontSize: 24,
                fontWeight: '600',
                color: '#242424',
                marginTop: 16
            }}>Category</Text>


            <View style={{
                height: 70,
                marginTop: 16
            }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F8F8F8',
                        borderRadius: 16,
                        padding: 8,
                        marginRight: 16
                    }}>

                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 8,
                            backgroundColor: '#EACB8E',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FontAwesome5 name='star' size={24} color='#FFF' />
                        </View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginLeft: 8
                        }}>Top 30 places</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F8F8F8',
                        borderRadius: 16,
                        padding: 8,
                        marginRight: 16
                    }}>

                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 8,
                            backgroundColor: '#8DE8C7',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FontAwesome5 name='tree' size={24} color='#FFF' />
                        </View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginLeft: 8
                        }}>Nature</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#F8F8F8',
                        borderRadius: 16,
                        padding: 8,
                        marginRight: 16
                    }}>

                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 8,
                            backgroundColor: '#EB5757',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FontAwesome5 name='pizza-slice' size={24} color='#FFF' />
                        </View>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginLeft: 8
                        }}>Gastro</Text>
                    </View>
                </ScrollView>
            </View>

            <Text style={{
                fontSize: 24,
                fontWeight: '600',
                color:'#242424',
                marginTop: 16
            }}>Popular</Text>

            <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity style={{
                    borderRadius: 16, 
                    marginTop: 16
                }}
                onPress={()=>navigation.navigate('Tour')}>
                    <Image source={require('../../assets/view_1.png')}
                    style={{
                        width: 380,
                        height: 200,
                        borderRadius: 16,
                        resizeMode:'cover'
                    }}/>
                    <View style={{
                        position:'absolute',
                        bottom: 10,
                        right: 10,
                        padding: 4,
                        borderRadius: 8,
                        flexDirection:'row',
                        alignItems:'center',
                        backgroundColor:'rgba(0,0,0,0.6)'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color:'#FFF',
                            marginRight: 8
                        }}>Yosemite National Park</Text>
                        <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        <Text style={{
                            fontWeight:'600',
                            color:'#FFF',
                            marginLeft: 4
                        }}>4,7</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderRadius: 16, 
                    marginTop: 16
                }}>
                    <Image source={require('../../assets/view_2.png')}
                    style={{
                        width: 380,
                        height: 200,
                        borderRadius: 16,
                        resizeMode:'cover'
                    }}/>
                    <View style={{
                        position:'absolute',
                        bottom: 10,
                        right: 10,
                        padding: 4,
                        borderRadius: 8,
                        flexDirection:'row',
                        alignItems:'center',
                        backgroundColor:'rgba(0,0,0,0.6)'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color:'#FFF',
                            marginRight: 8
                        }}>Golden Gate Bride</Text>
                        <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        <Text style={{
                            fontWeight:'600',
                            color:'#FFF',
                            marginLeft: 4
                        }}>4,9</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    borderRadius: 16, 
                    marginTop: 16
                }}>
                    <Image source={require('../../assets/view_3.png')}
                    style={{
                        width: 380,
                        height: 200,
                        borderRadius: 16,
                        resizeMode:'cover'
                    }}/>
                    <View style={{
                        position:'absolute',
                        bottom: 10,
                        right: 10,
                        padding: 4,
                        borderRadius: 8,
                        flexDirection:'row',
                        alignItems:'center',
                        backgroundColor:'rgba(0,0,0,0.6)'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color:'#FFF',
                            marginRight: 8
                        }}>Alcatraz Island</Text>
                        <FontAwesome5 name='star' size={16} color='#FFD875'/>
                        <Text style={{
                            fontWeight:'600',
                            color:'#FFF',
                            marginLeft: 4
                        }}>4,1</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>


        </View>
    );
};

export default HomeScreen;